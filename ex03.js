const createUser=(name, age=18, role="user")=>{
   console.log(`name: ${name}, age: ${age}, role: ${role}`);
}
createUser("Dev");
createUser("Nguyễn văn A", 20, "Admin");