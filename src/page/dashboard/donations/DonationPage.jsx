import * as React from "react";

import {
  useAddCampaignByAdmin,
  useDeleteCampaignByAdmin,
  useEditCampaignByAdmin,
  useGetAllCampaign,
  useGetAllCategories,
  useGetCampaignById,
} from "../../../features/campaign";

import { Link } from "react-router-dom";

import Modal from "react-responsive-modal";

import { useForm } from "react-hook-form";

import Select from "react-select";

import { Funnel, Trash, WarningCircle } from "@phosphor-icons/react";

const Image = React.lazy(() => import("../../../components/image"));

import Dashboard from "../../../layouts/dashboard";

import Background from "../../../components/background";
import { Button } from "../../../components/button";
import ProgressBar from "../../../components/progressbar";
import EventsDropdown from "../../../components/dropdown";
import Loading from "../../../components/loader";
import ImageSkeleton from "../../../components/skeleton/ImageSkeleton";

import { image_iflta, upload_photo } from "../../../assets";
import { formatDate, formatDateAndTime, formatInputDate } from "../../../utils/formatDate";

const InputCampaign = ({ type, placeholder, className, value, register, name }) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <input autoComplete="off" {...register(name)} type={type} className="input_form !px-0" placeholder={placeholder} defaultValue={value} />
    </div>
  );
};

const stylesOptions = {
  control: () => ({
    display: "inline-flex",
    borderBottom: "2px solid #313335b5",
    fontSize: "15px",
    width: "100%",
    fontFamily: "'zabal', 'inter', sans-serif",
  }),
};

const AddModal = ({ showModal, setShowModal, addCampaign, addPending, dataCategories }) => {
  const [file, setFile] = React.useState(null);
  const [fileUpload, setFileUpload] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const statusOptions = [
    { value: "active", label: "active" },
    { value: "closed", label: "closed" },
    { value: "pending", label: "pending" },
  ];

  const categoriesOptions = dataCategories?.map((item) => ({ value: item.id, label: item.name }));

  const onSubmit = (data) => {
    const { body, end, start, target, title, note, receiver, description } = data;
    const bodyValue = {
      title,
      body,
      target_donation: target,
      publish_date: start,
      end_date: end,
      image: fileUpload,
      categories,
      status,
      note,
      receiver,
      short_description: description,
    };
    addCampaign(bodyValue);
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileUpload(e.target.files[0]);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ description: "", end: "", start: "", target: "", title: "", type: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)} center classNames={{ modal: "customModal" }}>
      {addPending ? (
        <Loading height={80} width={80} className="m-10" />
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <h1 className="text-lg font-semibold text-center sm:text-start text-primary-1">Add Campaign</h1>
          <div className="relative text-center">
            <Background src={file || upload_photo} className="w-full h-32 mx-auto border border-gray-400 border-dashed sm:w-60 rounded-3xl" />
            <label htmlFor="file" className="text-sm font-semibold duration-300 cursor-pointer text-primary-1 hover:text-primary-2">
              Upload Photo
            </label>
            <input type="file" id="file" className="sr-only" onChange={handleChange} />
          </div>
          <div className="grid w-full grid-cols-2 mb-4 sm:min-w-md gap-x-4 gap-y-1">
            <InputCampaign register={register} name="title" placeholder="Campaign Title" type="text" />
            <InputCampaign register={register} name="target" placeholder="Campaign Target" type="number" />
            <Select
              placeholder="status"
              classNamePrefix="react-select"
              styles={stylesOptions}
              name="colors"
              options={statusOptions}
              onChange={(e) => setStatus(e.value)}
            />
            <Select
              placeholder="categories"
              classNamePrefix="react-select"
              styles={stylesOptions}
              isMulti
              name="colors"
              options={categoriesOptions}
              onChange={(e) => setCategories(e.map((item) => item.value))}
            />
            <InputCampaign register={register} name="note" placeholder="Note Campaign" type="text" />
            <InputCampaign register={register} name="receiver" placeholder="Name Receiver" type="text" />
            <InputCampaign register={register} name="start" placeholder="Start Date" type="date" />
            <InputCampaign register={register} name="end" placeholder="End Date" type="date" />
            <InputCampaign register={register} name="description" className="col-span-2" placeholder="Short Description" type="text" />
            <InputCampaign register={register} name="body" className="col-span-2" placeholder="Background Story" type="text" />
          </div>
          <Button type="submit" intent="secondary" className="!ms-auto">
            Save
          </Button>
        </form>
      )}
    </Modal>
  );
};

const EditModal = ({ dataCampaign, dataCategories, editCampaign, editPending }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [file, setFile] = React.useState();
  const [fileUpload, setFileUpload] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const { register, handleSubmit } = useForm();

  const statusOptions = [
    { value: "active", label: "active" },
    { value: "closed", label: "closed" },
    { value: "pending", label: "pending" },
  ];

  const categoriesOptions = dataCategories?.map((item) => ({ value: item.id, label: item.name }));

  const categoriesOptionValue = dataCategories
    ?.filter((item) => dataCampaign?.categories?.includes(item?.name))
    .map((item) => ({ value: item.id, label: item.name }));

  const statusOptionValue = [{ value: dataCampaign?.status, label: dataCampaign?.status }];

  const onSubmit = (data) => {
    const { body, end, start, target, title, note, receiver, description } = data;
    const bodyValue = {
      id: dataCampaign?.id,
      title,
      body,
      target_donation: target,
      publish_date: start,
      end_date: end,
      image: fileUpload || dataCampaign?.image,
      categories: categories || dataCampaign?.categories,
      status: status || dataCampaign?.status,
      note,
      receiver,
      short_description: description,
    };
    editCampaign(bodyValue);
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileUpload(e.target.files[0]);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)} ariaLabel="navigate-edit-campaign" className="mx-auto !text-sm !rounded-lg" intent="secondary">
        Edit Campaign
      </Button>
      <Modal open={showModal} onClose={() => setShowModal(false)} center classNames={{ modal: "customModal" }}>
        {editPending ? (
          <Loading height={80} width={80} className="m-10" />
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg font-semibold text-center sm:text-start text-primary-1">Edit Campaign</h1>
            <div className="relative text-center">
              <Background
                src={file || dataCampaign?.image}
                className="w-full h-32 mx-auto border border-gray-400 border-dashed sm:w-60 rounded-3xl"
              />
              <label htmlFor="file" className="text-sm font-semibold duration-300 cursor-pointer text-primary-1 hover:text-primary-2">
                Upload Photo
              </label>
              <input type="file" id="file" className="sr-only" onChange={handleChange} />
            </div>
            <div className="grid w-full grid-cols-2 mb-4 sm:min-w-md gap-x-4 gap-y-2">
              <InputCampaign register={register} name="title" value={dataCampaign?.title} type="text" />
              <InputCampaign register={register} name="target" value={dataCampaign?.target_donation} type="number" />
              <Select
                classNamePrefix="react-select"
                styles={stylesOptions}
                name="colors"
                options={statusOptions}
                defaultValue={statusOptionValue[0]}
                onChange={(e) => setStatus(e.value)}
              />
              <Select
                classNamePrefix="react-select"
                styles={stylesOptions}
                isMulti
                name="colors"
                options={categoriesOptions}
                defaultValue={categoriesOptionValue}
                onChange={(e) => setCategories(e.map((item) => item.value))}
              />
              <InputCampaign register={register} name="note" value={dataCampaign?.note} type="text" />
              <InputCampaign register={register} name="receiver" value={dataCampaign?.receiver} type="text" />
              <InputCampaign register={register} name="start" value={formatInputDate(dataCampaign?.publish_date)} type="date" />
              <InputCampaign register={register} name="end" value={formatInputDate(dataCampaign?.end_date)} type="date" />
              <InputCampaign register={register} name="description" value={dataCampaign?.short_description} className="col-span-2" type="text" />
              <InputCampaign register={register} name="body" value={dataCampaign?.body} className="col-span-2" type="text" />
            </div>
            <Button type="submit" intent="secondary" className="!ms-auto">
              Save
            </Button>
          </form>
        )}
      </Modal>
    </>
  );
};

const DetailModal = ({ dataCampaign }) => {
  const [showModal, setShowModal] = React.useState(false);

  const { data: singleDataCampaign, isLoading } = useGetCampaignById(dataCampaign?.id);

  const detailInfo = (key, value) => {
    return (
      <div className="flex text-sm font-medium text-dark-1">
        <p className="flex-shrink-0 w-28 md:w-40">{key}</p>
        <p>: {value}</p>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="absolute top-0 right-0 p-1 duration-300 rounded-full hover:bg-gray-200">
        <WarningCircle size={28} className="text-gray-500" />
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)} center classNames={{ modal: "customModal" }}>
        {isLoading ? (
          <Loading height={100} width={100} className="m-10" />
        ) : (
          <div className="w-full max-w-lg space-y-4 sm:min-w-sm">
            <Image src={singleDataCampaign?.image || image_iflta} className="h-40 mx-auto rounded-md w-60" description={singleDataCampaign?.title} />
            <div className="px-4 pb-8 space-y-2">
              {detailInfo("Start Date", formatDate(singleDataCampaign?.publish_date) || "none")}
              {detailInfo("End Date", formatDate(singleDataCampaign?.end_date) || "none")}
              {detailInfo("Status", singleDataCampaign?.status || "none")}
              {detailInfo("Current Donation", singleDataCampaign?.current_donation || "none")}
              {detailInfo("Target Donation", singleDataCampaign?.target_donation || "none")}
              {detailInfo("Note", singleDataCampaign?.note || "none")}
              {detailInfo("Description", singleDataCampaign?.short_description || "none")}
              {detailInfo("Background Story", singleDataCampaign?.body || "none")}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

const DeleteModal = ({ id, deleteCampaign, deletePending }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    deleteCampaign(id);
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(true)} className="p-2 duration-300 bg-gray-200 border rounded-md hover:bg-red-100 h-max">
        <Trash size={20} className="text-red-500" />
      </button>

      <Modal open={showModal} onClose={() => setShowModal(false)} center classNames={{ modal: "customModal" }}>
        {deletePending ? (
          <Loading height={100} width={100} className="m-10" />
        ) : (
          <form onSubmit={handleDeleteSubmit} className="w-full space-y-4 sm:min-w-xs">
            <div className="">
              <h1 className="mb-4 text-sm font-semibold text-center sm:text-start text-primary-1 sm:text-lg">Delete Campaign</h1>
              <p className="text-sm text-medium text-dark-1 sm:text-base">are you sure you want to permanently delete this campaign?</p>
            </div>
            <Button type="submit" intent="secondary" className="!ms-auto !rounded-lg">
              Save
            </Button>
          </form>
        )}
      </Modal>
    </>
  );
};

const CardDonation = ({ dataCampaign, dataCategories, editCampaign, editPending, deleteCampaign, deletePending }) => {
  return (
    <menu className="flex flex-wrap justify-center gap-4 mt-4 sm:justify-start">
      {dataCampaign?.length < 0 ? (
        <h1 className="text-3xl text-center text-primary-1">The data is not found</h1>
      ) : (
        dataCampaign?.map((item, index) => {
          const percentDonation = Math.round((item?.current_donation / 2000000) * 100);
          return (
            <article key={index} className="card max-w-300 !rounded-2xl">
              <React.Suspense fallback={ImageSkeleton}>
                <Image src={item?.image || image_iflta} className="w-full rounded-lg h-60" description={item?.title} />
              </React.Suspense>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {item?.categories?.map((category, categoryId) => (
                      <p className="text-xs font-bold" key={categoryId}>
                        {category}
                        {item?.categories?.length > 1 && categoryId - 1 ? "," : ""}
                      </p>
                    ))}
                  </div>
                  <Link to={`/dashboard/donation/${item?.id}`}>
                    <h1 className="font-semibold text-primary-1 line-clamp-2">{item?.title}</h1>
                  </Link>
                </div>
                <DeleteModal id={item?.id} deleteCampaign={deleteCampaign} deletePending={deletePending} />
              </div>
              <div className="relative flex items-center w-full gap-2 py-4">
                <ProgressBar progress={percentDonation} target_donation={item?.target_donation} current_donation={item?.current_donation} />
              </div>
              <div className="relative flex">
                <EditModal dataCategories={dataCategories} dataCampaign={item} editPending={editPending} editCampaign={editCampaign} />
                <DetailModal dataCampaign={item} />
              </div>
            </article>
          );
        })
      )}
    </menu>
  );
};

const DonationPage = () => {
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);
  const [filteredDonation, setFilteredDonation] = React.useState("All");
  const [showModal, setShowModal] = React.useState(false);

  const { mutate: addCampaign, isPending: addPending } = useAddCampaignByAdmin();

  const { mutate: editCampaign, isPending: editPending } = useEditCampaignByAdmin();

  const { mutate: deleteCampaign, isPending: deletePending } = useDeleteCampaignByAdmin();

  const { data: dataCampaign, dataUpdatedAt, isLoading } = useGetAllCampaign();

  const { data: dataCategories } = useGetAllCategories();
  console.log("🚀 ~ DonationPage ~ dataCategories:", dataCategories);

  const filteredDonations = dataCampaign?.filter((item) => {
    return item?.categories?.includes(filteredDonation);
  });

  const detail = <p className="text-sm text-gray-500">Last updated at: {formatDateAndTime(dataUpdatedAt || new Date())}</p>;

  return (
    <Dashboard title="Campaigns Management" detail={detail}>
      <div className="flex flex-col items-center justify-between gap-4 my-4 sm:flex-row">
        <div className="flex items-center h-full gap-4 border border-gray-300 rounded-lg sm:divide-x sm:divide-gray-300">
          <span className="hidden py-2 pl-4 sm:block">
            <Funnel size={20} />
          </span>
          <span className="hidden py-2 pl-4 font-bold sm:block">Filter By</span>
          <EventsDropdown
            isPopoverOpen={isPopoverOpen}
            setFiltered={setFilteredDonation}
            setPopoverOpen={setPopoverOpen}
            filtered={filteredDonation}
            title="Campaign Type"
            typeList={dataCategories}
          />
        </div>
        <Button onClick={() => setShowModal(true)} ariaLabel="navigate-add-campaign" intent="secondary">
          Add New Campaign
        </Button>
        <AddModal
          dataCategories={dataCategories}
          addPending={addPending}
          addCampaign={addCampaign}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      {isLoading ? (
        <Loading height={100} width={100} />
      ) : (
        <CardDonation
          deleteCampaign={deleteCampaign}
          deletePending={deletePending}
          editCampaign={editCampaign}
          editPending={editPending}
          dataCategories={dataCategories}
          dataCampaign={filteredDonation === "All" ? dataCampaign : filteredDonations}
        />
      )}
    </Dashboard>
  );
};

export default DonationPage;
