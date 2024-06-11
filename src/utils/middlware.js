export function isAuthenticated(user) {
    if (user) {
      return true;
    }
    return false;
  }
  
  export function protectRoute(router, user) {
    return () => {
      if (!isAuthenticated(user)) {
        router.push("/login");
      } else  {
        router.push("/");
      }
    };
  }
  
//   function roleCheck(role, user) {
//     switch (role) {
//       case "hradmin":
//         return isHRAdmin(user);
//       case "itadmin":
//         return isItAdmin(user);
//       case "employee":
//         return isEmployee(user);
//       case "manager":
//         return isManager(user);
//       default:
//         return false;
//     }
//   }
  