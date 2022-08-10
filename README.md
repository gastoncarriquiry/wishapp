
# WishApp

WishApp is a wishlist manager. Ideally it would connect to different online shops (i.e Zara, H&M, Amazon) and display all your liked items in one place. Due to scarce resources and knowledge, the project remains simple and is limited to manual addition of products. 

This project is a Single-Page Application. It has both frontend and backend features. It was developed with NodeJs, Express framework and MongoDB's non-relational database.

## Dependencies


[![cors](https://img.shields.io/badge/cors-%5E2.8.5-yellowgreen)](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
[![dotenv](https://img.shields.io/badge/dotenv-%5E10.0.0-blue)](https://github.com/motdotla/dotenv)
[![express](https://img.shields.io/badge/express-%5E4.17.1-red)](http://expressjs.com/es/)
[![mongoose](https://img.shields.io/badge/mongoose-%5E6.0.12-green)](https://mongoosejs.com/)

## Live View
[Running website](https://wishapp.glitch.me/)


## Installation

Clone the project

```bash
  git clone https://github.com/gastoncarriquiry/wishapp.git
```

Go to the project directory

```bash
  cd wishapp
```

Install dependencies

```bash
  npm install
```
    
## Environment Variables

Locate `.env.example` file and replace `DB_USER` and `DB_PASS` with your own MongoDB username and password. Then remove the `.example` extension from the file name.

Lastly, go to `index.js` and change `DBconnection` in line 10 to your own MongoDB cluster connection.

The connection URL should look like this:

```bash
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.cwrzz.mongodb.net/<database>?retryWrites=true&w=majority`
```
*< database >* should be replaced with the name of the database created for the purpose of this project. **Inside this database you must create a collection called _deseos_ and another one called _usuarios_.**

## Deployment

To deploy this project run:

```bash
    node index.js
```

## Features

- Responsive through mobile and desktop
- Register / login
- Search Filters
- Add, remove or modify existing products from your list
- Logging out
- Dynamic form depending on the type of product to add


## Author

Gaston Carriquiry - [Contact me!](mailto:gastoncarriquiry@gmail.com)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://gastoncarriquiry.glitch.me/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/gastoncarriquiry)
