<a name="readme-top"></a>

<!-- [![Contributors][contributors-shield]][contributors-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h2 align="center">Mtumba_Bay</h2>

  <p align="center">
    Project description
    <br/>
    <br/>
    <a href="https://github.com/conceptacherono/mtumba_bay">View Demo</a>
    ·
    <a href="https://github.com/conceptacherono/mtumba_bay/issues">Report Bug</a>
    ·
    <a href="https://github.com/conceptacherono/mtumba_bayissues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- Sample app screenshot -->

[![Product Name Screen Shot][product-screenshot]](https://example.com)

About the project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Steps to setup your local dev environment.

### Prerequisites

Project uses yarn as default package manager

You can install yarn via the command below or follow platform specific installation steps <a href="https://yarnpkg.com/getting-started/install" target="_blank">here</a>

- yarn

  ```sh
  npm install --global yarn
  ```

- If using docker ensure you have docker installed or follow the installation guide <a href="https://docs.docker.com/get-docker/" target="_blank">here</a>

### Installation

_Below are steps to setup your local dev environment._

1. Clone the repo
   ```sh
   git clone https://github.com/conceptacherono/mtumba_bay.git
   ```
2. CD into client
   ```sh
   cd client
   ```
3. Install NPM packages
   ```sh
   yarn
   ```
4. Run local dev server
   ```sh
   yarn dev
   ```

_If instead you prefer using docker:_

1. Clone the repo
   ```sh
   git clone https://github.com/conceptacherono/mtumba_bay.git
   ```
2. CD into client
   ```sh
   cd client
   ```
3. run docker using compose to setup and run project
   ```sh
   docker compose up
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--ENDPOINTS -->

## Endpoints
User endpoints

  1. Endpoint:
     ```sh
     /api/auth/register
     ```
       HTTP Method: POST
       Description: This endpoint is used for user registration. It expects a POST request to create a new user account.

   2. Endpoint:
      ```sh
       /api/auth/login
       ```
       HTTP Method: POST
       Description: This endpoint is used for user login. It expects a POST request with the user's credentials to authenticate and       obtain an authentication token.
   
   3. Endpoint: 
       ```sh
       /api/auth/logout
       ```
       HTTP Method: POST
       Description: This endpoint is used for user logout. It expects a POST request to invalidate the user's authentication token and log them out.

   4. Endpoint: 
       ```sh
       /api/auth/profile
       ```
       HTTP Method: GET
       Description: This endpoint is used to retrieve the user's profile information. It expects a GET request with a valid authentication token in the headers to access the user's profile details.
    
Order Endpoints

   1. Endpoint: 
       ```sh
       /api/orders/
       ```
        HTTP Method: POST
        Description: This endpoint is used to create a new order. It expects a POST request with the necessary order details to create the order.
     
   2. Endpoint: 
       ```sh
       /api/orders/<str:order_id>/
       ```
       HTTP Method: GET
       Description: This endpoint is used to retrieve the details of a specific order. It expects a GET request with the order_id parameter in the URL to fetch the details of the corresponding order.

   3. Endpoint: 
       ```sh
       /api/users/<str:user_id>/orders/
       ```
       HTTP Method: GET
       Description: This endpoint is used to retrieve the order history of a specific user. It expects a GET request with the user_id parameter in the URL to fetch the order history of the corresponding user.
   
   4. Endpoint: 
       ```sh
       /api/orders/<str:order_id>/cancel/
       ```
       HTTP Method: POST
       Description: This endpoint is used to cancel a specific order. It expects a POST request with the order_id parameter in the URL to cancel the corresponding order.
       
   5. Endpoint: 
       ```sh
       /api/orders/<str:order_id>/tracking/
       ```
       HTTP Method: GET
        Description: This endpoint is used to track the status of a specific order. It expects a GET request with the order_id parameter in the URL to fetch the tracking information for the corresponding order.

Product Endpoints 

   1. Endpoint: 
       ```sh
       /api/products/
       ```
        HTTP Method: GET
        Description: This endpoint is used to retrieve a list of products. It expects a GET request to fetch all available products.
        
   2. Endpoint: 
       ```sh
       /api/products/<int:pk>/
       ```
        HTTP Method: GET
        Description: This endpoint is used to retrieve the details of a specific product. It expects a GET request with the pk (product primary key) parameter in the URL to fetch the details of the corresponding product.

   3. Endpoint: 
       ```sh
       /api/products/search/
       ```
       HTTP Method: GET
       Description: This endpoint is used to search for products based on certain criteria. It expects a GET request with the necessary search parameters to retrieve the matching products.

   4. Endpoint: 
       ```sh
       /api/products/
       ```
       HTTP Method: POST
       Description: This endpoint is used to create a new product. It expects a POST request with the necessary details to create the product.
    
   5. Endpoint: 
       ```sh
       /api/products/<int:pk>/
       ```
       HTTP Method: PUT
       Description: This endpoint is used to update the details of a specific product. It expects a PUT request with the pk parameter in the URL to update the corresponding product.
   
   6. Endpoint: 
       ```sh
       /api/products/<int:pk>/
       ```
       HTTP Method: DELETE
       Description: This endpoint is used to delete a specific product. It expects a DELETE request with the pk parameter in the URL to delete the corresponding product.

Shopping cart Endpoints

   1. Endpoint: 
       ```sh
       /api/cart/add/
       ```
       HTTP Method: POST
       Description: This endpoint is used to add a product to the shopping cart. It expects a POST request with the necessary details (e.g., product ID, quantity) to add the product to the cart.

   2. Endpoint: 
       ```sh
       /api/cart/update/
       ```
       HTTP Method: PUT
       Description: This endpoint is used to update the quantity or details of a product in the shopping cart. It expects a PUT request with the necessary details (e.g., product ID, updated quantity) to modify the cart.

   3. Endpoint: 
       ```sh
       /api/cart/remove/
       ```
       HTTP Method: DELETE
       Description: This endpoint is used to remove a product from the shopping cart. It expects a DELETE request with the necessary details (e.g., product ID) to remove the product from the cart.

   4. Endpoint: 
       ```sh
       /api/cart/checkout/
       ```
       HTTP Method: POST
       Description: This endpoint is used to initiate the checkout process for the items in the shopping cart. It expects a POST request to initiate the checkout process, which may include payment processing and order placement.   

Review Endpoints 

   1. Endpoint: 
       ```sh
       /api/products/<int:product_id>/reviews
       ```
       HTTP Method: POST
       Description: This endpoint is used to add a review for a specific product. It expects a POST request with the necessary details (e.g., product ID, review content) to add a new review.
    
   2. Endpoint: 
       ```sh
       /api/products/<int:product_id>/reviews
       ```
       HTTP Method: GET
       Description: This endpoint is used to retrieve all the reviews for a specific product. It expects a GET request to fetch the reviews associated with the specified product.

   3. Endpoint: 
       ```sh
       /api/products/<int:product_id>/reviews/<int:review_id>
       ```
       HTTP Method: PUT
       Description: This endpoint is used to update a specific review for a product. It expects a PUT request with the product_id and review_id parameters in the URL to update the corresponding review.

   4. Endpoint: 
       ```sh
       /api/products/<int:product_id>/reviews/<int:review_id>
       ```
       HTTP Method: DELETE
       Description: This endpoint is used to delete a specific review for a product. It expects a DELETE request with the product_id and review_id parameters in the URL to delete the corresponding review.
  
Upload Endpoints

  1. Endpoint: 
      ```sh
      /api/product/image-upload/
      ```
      HTTP Method: POST
      Description: This endpoint is used to upload an image for a product. It expects a POST request with the image file data to upload the image for the product.

   2. Endpoint: 
       ```sh
       /api/user/profile-picture-upload/
       ```
       HTTP Method: POST
       Description: This endpoint is used to upload a profile picture for a user. It expects a POST request with the image file data to upload the profile picture for the user.

   3. Endpoint: 
       ```sh
       /api/file/upload/
       ```
       HTTP Method: POST
       Description: This endpoint is used to upload a file. It expects a POST request with the file data to upload the file.

   4. Endpoint: 
       ```sh
       /api/file/download/<int:fileId>/
       ```
       HTTP Method: GET
       Description: This endpoint is used to download a specific file. It expects a GET request with the fileId parameter in the URL to download the corresponding file.
    
<!-- ROADMAP -->

## Roadmap

- [ ] Main app landing page - Introduces the online store and showcases featured products
- [ ] Main navigation - Navbar to switch between different pages within the app
- [ ] Product list page - Display a list of items with image, title, prices and brief descriptions
- [ ] Product detail page - Shows detailed info about a specific product
- [ ] Add a cart - For users to manage their shopping items
- [ ] Implement Checkout - Handles payment and entry of shipping info
- [ ] User Profile - Display user info i.e personal details, saved items, account settings etc
- [ ] Setup authentication

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

To contribute:
<br />
**Note**

- Please check `commitlint.config.cjs` file for valid commit message prefixes
- Running git commit will lint your project. Commit messages must be valid
- Running git push will initialize the build process and only a successful build will be pushed

1. Fork the Project or clone by running

```sh
  git clone https://github.com/conceptacherono/mtumba_bay.git
```

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'prefix: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

License info

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Contact info

Project Link: [https://github.com/conceptacherono/mtumba_bay](https://github.com/conceptacherono/mtumba_bay)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Acknowledgements

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
