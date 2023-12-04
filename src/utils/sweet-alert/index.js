import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { refreshToken } from "../../features/authentication";
// import { useRefreshToken } from "../../features/authentication";

const SweatAlert = (title, icon) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon,
    title,
  });
};

export const SweatAlertWithContent = (title) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: title,
    showDenyButton: true,
    confirmButtonText: "Extend Session",
    denyButtonText: "Cancel",
    confirmButtonColor: "#0096C7",
    denyButtonColor: "#d33123",
    position: "top",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const data = await refreshToken();
      SweatAlert(data?.message, "success");
      setTimeout(() => {
        window.location.reload();
      }, 2200);
    } else if (result.isDenied) {
      localStorage.clear();
      window.location.href = "/login";
    }
  });
};

export default SweatAlert;
