let browser = window.browser || window.chrome;

console.log('Binding to button...');
document.getElementById('test-btn').onclick = () => {
  console.log('Fetching...');
  fetch('http://localhost:6021/test').then(res => {
    console.log(res);
    alert('It worked! Check logs for response.');
  });
};
