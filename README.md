##Install Package terlebih dahulu
```npm i your-form-validation```



**Penggunaan:**

```javascript
const formValidation = require('form-validation');

const formData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: '12345678',
};

const validationResult = formValidation(formData);

if (validationResult.success) {
  // Formulir valid
  console.log('Formulir valid!');
} else {
  // Formulir tidak valid
  console.log('Formulir tidak valid!');
  console.log(validationResult.errors);
}
```
