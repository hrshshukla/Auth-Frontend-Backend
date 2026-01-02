## Mongoose `.statics` vs `.methods`

### ✔ Final corrected understanding (Hinglish)

#### 🔹 `.statics.hashPassword`

✔ **Class-level / Model-level function**
✔ **Object (document) banaye bina use ho sakta hai**
✔ **Har document ke liye common hota hai**

👉 Ye **pure collection ke liye utility** hota hai

```js
const hashed = await User.hashPassword("123456");
```

🧠 `this` = **User Model**

---

#### 🔹 `.methods.isValidPass`

✔ **Document-level function**
✔ **Sirf usi particular user ka password use karega**
✔ **Tabhi kaam karega jab document mile**

```js
const user = await User.findOne({ email });
const ok = await user.isValidPass("123456");
```

🧠 `this` = **that user document**

---

### Example with real values (short)

#### MongoDB document

```json
{
  "_id": "1",
  "email": "harsh@email.com",
  "password": "$2b$10$xyz"
}
```

---

#### Schema

```js
userSchema.statics.hashPassword = async function (plain) {
  return "HASH(" + plain + ")";
};

userSchema.methods.isValidPass = function (plain) {
  return this.password === "HASH(" + plain + ")";
};
```

---

#### Flow

```js
const hashed = await User.hashPassword("123456"); // no document needed

const user = await User.findOne({ email: "harsh@email.com" });
user.isValidPass("123456"); // uses this.password
```

---

### One-line interview answer 🔥

> **`.statics` = common class-level logic, no document needed**
> **`.methods` = document-specific logic, needs a document**

---

### Very important naming best-practice

| Good                  | Bad                     |
| --------------------- | ----------------------- |
| `User.hashPassword()` | `user.hashPassword()` ❌ |
| `user.isValidPass()`  | `User.isValidPass()` ❌  |

---

### Your sentence → corrected version

> ✔ **“.static.hashPassword ek common function hota hai jo bina document banaye kaam karta hai, jabki .methods.isValidPass us particular document ke password pe validation karta hai.”**

Absolutely right 💯

