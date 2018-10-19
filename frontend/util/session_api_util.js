export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  });
};


export const login = (user) => {
  console.log('help2')
  debugger;
  return $.ajax({
    method: "POST",
    url: "/api/sessions",
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/sessions"
  });
};
