const condition = true;
if (condition) {
import("./Module1.mjs")
.then((module1) => {
module1.Hello1();
})
.catch((error) => console.error("Error importing Module A:", error));
} else {
import("./Module2.mjs")
.then((module2) => {
module2.Hello2();
})
.catch((error) => console.error("Error importing Module B:", error));
}