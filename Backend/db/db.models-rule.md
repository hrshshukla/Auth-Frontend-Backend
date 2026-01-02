### What's this : ```mongoose.model(name, schema)```
## Code

```js
Syntax : mongoose.model(name, schema)
Implementation : const User = mongoose.model('user', userSchema);
```


yaha par jo `name` pass krte hai wahi mongodb me `collection name` ban jata hai, lekin `model name` — se — `collection name` banne se pehle `mongoose ke rules` follow krna padta hai

#### Rule in one line:

> **Model name → lowercase + plural = collection name**



### Examples (very important)

| Code                             | MongoDB collection name |
| -------------------------------- | --------------------- |
| `mongoose.model('user', ...)`    | `users`               |
| `mongoose.model('User', ...)`    | `users`               |
| `mongoose.model('Product', ...)` | `products`            |
| `mongoose.model('Person', ...)`  | `people`              |


👉 **Pluralization hoti hai**

---

### Visual mapping (easy to remember)

```
Model (code)
   User
     ↓
Collection (MongoDB)
   users
```

---

## Interview-style exact statement ✅

> “Mongoose me **model ka naam directly collection ka naam nahi hota**, balki Mongoose us model name ka **lowercase plural form** bana kar collection use karta hai.”

---

## Bonus (agar exact naam chahiye ho)

Agar tum **exact collection name** control karna chahte ho:

```js
const User = mongoose.model('User', userSchema, 'user');
```

👉 Ab Compass me dikhega:

```
user
```

(no plural)

---

## Final answer 

> ✅ Model ka naam = collection ka **base** hota hai (plural ban ke dikhta hai)
