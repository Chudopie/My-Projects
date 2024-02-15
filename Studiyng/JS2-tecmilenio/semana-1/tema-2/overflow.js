function foo() {
  foo();
  setTimeout(() => {}, 3000);
}
foo();
