async function f() {
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
}


