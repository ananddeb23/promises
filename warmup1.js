const printvalue = () => {
  console.log('TIMED OUT!');
};
function caller() {
  setTimeout(printvalue, 300);
}
// caller();
module.exports = printvalue;
