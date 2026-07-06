/*
What is shallow copy?

You can say:

"A shallow copy creates a new object, but nested objects or arrays are still shared between the original and the copied object.
So if I modify a nested property, the original object is also affected."

What is deep copy?

You can say:

"A deep copy creates a completely independent copy of the object, including all nested objects and arrays.
 Any changes made to the copied object do not affect the original object."

 Shallow copy 📁: You make a new folder, but the files inside are actually shortcuts to the original files. Editing a file changes it for both folders.
Deep copy 📁📁: You make a new folder and duplicate every file inside it. Editing a file in the new folder doesn't affect the original.

1. Shallow Copy

HR creates another employee record.

The employee record is new, but the address is shared.

Original Employee              Copied Employee

Name: Likhitha                 Name: Likhitha

Address  --------------------> Address
             (Same Address Object)

Now the copied employee changes the city from Hyderabad to Bangalore.

Since both records share the same address, the original employee's city also becomes Bangalore.

This is called a Shallow Copy.

Code Example
const employee = {
  name: "Likhitha",
  address: {
    city: "Hyderabad"
  }
};

// Shallow Copy
const copy = { ...employee };

// Change nested object
copy.address.city = "Bangalore";

console.log(employee.address.city); // Bangalore
console.log(copy.address.city);     // Bangalore
Output
Bangalore
Bangalore

Why?
The address object is shared by both employee and copy.

2. Deep Copy
Now HR creates another employee record along with a completely new address.

Original Employee          Copied Employee

Name: Likhitha             Name: Likhitha

Address                    Address
City: Hyderabad            City: Hyderabad

Now the copied employee changes the city to Bangalore.

The original employee still has Hyderabad because both have different address objects.

This is called a Deep Copy.

Code Example
const employee = {
  name: "Likhitha",
  address: {
    city: "Hyderabad"
  }
};

// Deep Copy
const copy = structuredClone(employee);

// Change nested object
copy.address.city = "Bangalore";

console.log(employee.address.city); // Hyderabad
console.log(copy.address.city);     // Bangalore
Output
Hyderabad
Bangalore
Interview Answer (Simple)

Shallow Copy: A shallow copy creates a new object, but nested objects are copied by reference. So if we modify a nested object in the copied object, the original object is also affected.
We can create a shallow copy using the spread operator (...) or Object.assign().

Deep Copy: A deep copy creates a completely independent copy of the object, including all nested objects. Changes made to the copied object do not affect the original. We can create a deep copy using structuredClone().

Easy way to remember
Shallow Copy	Deep Copy
New outer object	Completely new object
Nested objects are shared	Nested objects are also copied
Changes affect the original	Changes do not affect the original
Example: { ...obj }	Example: structuredClone(obj)

One line to impress the interviewer:

"Primitive values are copied by value, whereas objects and arrays are copied by reference. That's why shallow copies share nested objects, while deep copies create entirely new nested objects."
 */