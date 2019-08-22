export const isAuthenticated = () =>
  surveyData.filter(week => week.week === surveyWeek)

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// export { fakeAuth }

export const getJwt = () => {
  return localStorage.getItem('token');
};