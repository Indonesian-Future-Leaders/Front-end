import {
  ACT,
  INITIATE,
  SHARE,
  image_ap,
  image_blog,
  image_ctg,
  image_gtg,
  image_iflta,
  image_program,
  image_project,
  image_wct,
  image_yq,
} from "../assets";
import { gmail, instagram, linkedin, tiktok, youtube } from "../assets/icons";

export const socialIconsList = [
  { image: instagram, path: "https://www.instagram.com/ifutureleaders_malang/" },
  { image: linkedin, path: "https://www.linkedin.com/company/ifl-malang/" },
  { image: tiktok, path: "https://www.tiktok.com/@iflchaptermalang" },
];

export const socialIconsTextList = [
  { title: "info@iflmalang.org", image: gmail, path: "mailto:info@iflmalang.org?subject=SendMail&body=Description" },
  { title: "Indonesian Future Leaders", image: youtube, path: "https://www.youtube.com/@indonesianfutureleaders7144" },
];

export const pillarsActionList = [
  {
    icon: INITIATE,
    title: "Capacity Building",
    desc: "Melaksanakan pembangunan kapasitas dan skills di berbagai bidang kepada generasi muda.",
  },
  {
    icon: ACT,
    title: "Community Service",
    desc: "Memberikan dampak kepada lingkungan melalui kegiatan-kegiatan sosial dan pemberdayaan masyarakat.",
  },
  {
    icon: SHARE,
    title: "Promotion and Advocacy",
    desc: "Melakukan advokasi mengenai kebijakan-kebijakan yang terkait dengan generasi muda, kepada seluruh stakeholders terkait.",
  },
];

export const headBlog = {
  title: "IFL Blog",
  description:
    "Dalam pelaksanaanya, IFL Chapter Malang didasarkan pada rancangan pembangunan Pemerintah Kota Malang dengan berlandaskan pada 8 poin SDGs; no poverty; good health & well being; quality education; gender equality; reduced inequalities; sustainable cities and communities; peace, justice, and strong institutions; and partnership for the goals.",
  image: image_blog,
};

export const projectDescriptions = {
  title: "Project",
  description:
    "Program & Project IFL Chapter Malang 2022/2023 berlandaskan pada delapan poin Sustainable Development Goals (SDGs) berdasarkan The Way Forward Indonesia yang dikeluarkan oleh United Nation Development Programme (UNDP) serta berdasarkan rancangan pembangunan yang dikeluarkan oleh Pemerintah Kota Malang. Poin SDGs tersebut no poverty; gender equality; reduced inequalities; sustainable cities and communities; peace, justice, and strong institutions dan partnership for the goals.",
  image: image_project,
};

export const programDescriptions = {
  title: "Program",
  description:
    "Program & Project IFL Chapter Malang 2023/2024 berlandaskan pada delapan poin Sustainable Development Goals (SDGs) berdasarkan The Way Forward Indonesia yang dikeluarkan oleh United Nation Development Programme (UNDP) serta berdasarkan rancangan pembangunan yang dikeluarkan oleh Pemerintah Kota Malang. Poin SDGs tersebut good health & well being dan quality education.",
  image: image_program,
};

export const programList = [
  {
    title: "We Care Them",
    desc: "Salah Satu program dari Indonesian Future Leaders Chapter Malang yang berfokus pada  poin SDGs no. 3 (Good health and well being ). Berangkat dari isu kesehatan, We Care Them befokus pada isu HIV/AIDS yang berada di Kota Malang. We Care Them bertujuan untuk meningkatkan kesadaran, mengedukasi masyarakat, serta memberikan dukungan psikis kepada penderita HIV/AIDS.",
    timeline: "Program We Care Them dilakukan secara berkala kurang lebih satu bulan pada bulan November 2023.",
    target: "Target sasaran dari program We Care Them adalah Penyandang HIV/AIDS dan Masyarakat.",
    image: image_wct,
  },
  {
    title: "Aku Pintar",
    desc: "Salah Satu program dari Indonesian Future Leaders Chapter Malang yang memiliki fokus pada poin SDG nomor 4 (Quality Education). Berangkat dari isu pendidikan, Program Aku Pintar bertujuan untuk ikut berkontribusi dalam mendukung serta meningkatkan kualitas pendidikan dengan mengangkat isu anti tbullying dan multikulturalisme di Malang Raya.",
    timeline: "Program Aku Pintar akan dilakukan pada bulan Februari 2024 dengan persiapan pada bulan Januari 2024.",
    target: "Target sasaran program Aku Pintar adalah para siswa sekolah Malang Raya.",
    image: image_ap,
  },
];

export const projectList = [
  {
    title: "Close The Gap",
    desc: "Salah satu project dari Indonesian Future Leaders Chapter Malang yang memiliki fokus pada poin SDG nomor 10 (Reduced Inequalities). Berangkat dari adanya isu ketidaksetaraan, Close the Gap berfokus pada pemberdayaan kelompok masyarakat penyandang difabel yang bertujuan untuk menciptakan ruang inklusif serta untuk menghilangkan stigma negatif.",
    timeline: "Waktu pelaksanaan dilakukan pada satu waktu pada bulan Desember 2023.",
    target: "Target sasaran dari Project Close The Gap adalah kelompok masyarakat penyandang disabilitas di Malang Raya.",
    image: image_ctg,
  },
  {
    title: "Grow Them Great",
    desc: "Grow Them Great merupakan salah satu project yang berfokus pada poin SDG Nomor 1 (No Poverty). Berangkat dari isu kemiskinan, project ini memiliki beberapa fase yang berfokus pada pemberdayaan masyarakat. Grow them Great bertujuan untuk menyatukan serta menggerakan para pemuda di Kota Malang untuk berkontribusi dalam pengurangan serta penyelesaian terkait isu kemiskinan di Malang Raya.",
    timeline: "Waktu pelaksanaan project Grow Them Great akan dilaksanakan sekitar bulan Februari 2024.",
    target: "Target sasaran dari project Grow Them Great ini adalah masyarakat desa di kabupaten Malang serta pemuda-pemudi Kota Malang.",
    image: image_gtg,
  },
  {
    title: "YouthQuake",
    desc: "Kegiatan diluar program dan project utama IFL Chapter Malang yang bertujuan memberi informasi terkait pentingya keterlibatan pemuda dalam politik dan edukasi terkait kekerasan seksual. Pada tahun ini, Youthquake befokus pada isu perdamaian,keadilan, dan institusi yang kuat, serta kesetaraan gender (SDG 16 dan SDG 5).",
    timeline: "Waktu pelaksanaan project YouthQuake akan dilaksanakan sekitar bulan Mei 2024 dengan persiapan di bulan April 2024.",
    target: "Target sasaran dari project YouthQuake ini adalah pemuda di Malang raya.",
    image: image_yq,
  },
  {
    title: "IFL Take Action",
    desc: "Kegiatan yang mempunyai fokus pada poin SDG nomor 11 (sustainable cities and communities), terkait dengan disaster risk reduction. Berangkat dari adanya urgensi terhadap situasi masyarakat yang terdampak oleh sesuatu atau bencana, IFL Take action ini bertujuan sebagai wadah untuk berkontribusi dalam menangani masyarakat yang terkena dampak bencana.",
    timeline: "Kegiatan IFL Take Action ini bersifat unpredictable, menyesuaikan dengan adanya isu bencana yang terjadi.",
    target: "Target sasaran dari kegiatan IFL Take Action adalah masyarakat yang terdampak sesuatu atau bencana yang terjadi di Indonesia.",
    image: image_iflta,
  },
];
