function block(success, fail) {
  let data = 5;
  if (data === 5) return success('ok');
  else return fail('sorry');
}

function getData() {
  return new Promise((res, rej) => {
    block(res, rej);
  });
}

async function gets() {
  const data = await getData();
  console.log(data);
}
gets();
