#Market mate STOCK MANAGEMENT API

### Market Mate, kullanıcıların ürünleri satın almasına, satış yapmasına ve envanter yönetimini kolaylaştırmasına olanak tanıyan kapsamlı bir uygulamadır.


### Tablolar ve Açıklamaları

- **users**: Kullanıcı bilgilerini içerir.
  - `id`: Kullanıcı ID
  - `username`: Kullanıcı adı
  - `password`: Şifre
  - `email`: E-posta
  - `firstName`: Ad
  - `lastName`: Soyad
  - `isActive`: Aktiflik durumu
  - `isStaff`: Personel olup olmadığı
  - `isAdmin`: Admin olup olmadığı
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

- **sales**: Satış işlemlerinin detaylarını kayıt eder.
  - `id`: Satış ID
  - `userId`: Kullanıcı ID
  - `brandId`: Marka ID
  - `productId`: Ürün ID
  - `quantity`: Miktar
  - `price`: Fiyat
  - `priceTotal`: Toplam Fiyat
  - `createdAt`: Oluşturulma tarihi

- **categories**: Ürün kategorilerini listeler.
  - `id`: Kategori ID
  - `name`: Kategori adı
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

- **products**: Ürün detaylarını içerir.
  - `id`: Ürün ID
  - `categoryId`: Kategori ID
  - `brandId`: Marka ID
  - `name`: Ürün adı
  - `quantity`: Miktar
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

- **brands**: Farklı ürün markalarını içerir.
  - `id`: Marka ID
  - `name`: Marka adı
  - `image`: Resim
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

- **firms**: Satın alımlarla ilişkili firmaların detaylarını içerir.
  - `id`: Firma ID
  - `name`: Firma adı
  - `phone`: Telefon numarası
  - `address`: Adres
  - `image`: Resim
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

- **purchases**: Satın alma işlemlerinin detaylarını kayıt eder.
  - `id`: Satın alma ID
  - `userId`: Kullanıcı ID
  - `firmId`: Firma ID
  - `brandId`: Marka ID
  - `productId`: Ürün ID
  - `quantity`: Miktar
  - `price`: Fiyat
  - `priceTotal`: Toplam Fiyat
  - `createdAt`: Oluşturulma tarihi
  - `updatedAt`: Güncellenme tarihi

# Market Mate STOCK MANAGEMENT API

### Market Mate is a comprehensive application that allows users to purchase products, make sales, and facilitate inventory management.


### Tables and Descriptions

- **users**: Contains user information.
  - `id`: User ID
  - `username`: Username
  - `password`: Password
  - `email`: Email
  - `firstName`: First Name
  - `lastName`: Last Name
  - `isActive`: Active Status
  - `isStaff`: Whether the user is a staff member
  - `isAdmin`: Whether the user is an admin
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

- **sales**: Records details of sales transactions.
  - `id`: Sale ID
  - `userId`: User ID
  - `brandId`: Brand ID
  - `productId`: Product ID
  - `quantity`: Quantity
  - `price`: Price
  - `priceTotal`: Total Price
  - `createdAt`: Creation Date

- **categories**: Lists product categories.
  - `id`: Category ID
  - `name`: Category Name
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

- **products**: Contains product details.
  - `id`: Product ID
  - `categoryId`: Category ID
  - `brandId`: Brand ID
  - `name`: Product Name
  - `quantity`: Quantity
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

- **brands**: Contains information about different product brands.
  - `id`: Brand ID
  - `name`: Brand Name
  - `image`: Image
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

- **firms**: Contains details about firms associated with purchases.
  - `id`: Firm ID
  - `name`: Firm Name
  - `phone`: Phone Number
  - `address`: Address
  - `image`: Image
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

- **purchases**: Records details of purchase transactions.
  - `id`: Purchase ID
  - `userId`: User ID
  - `firmId`: Firm ID
  - `brandId`: Brand ID
  - `productId`: Product ID
  - `quantity`: Quantity
  - `price`: Price
  - `priceTotal`: Total Price
  - `createdAt`: Creation Date
  - `updatedAt`: Update Date

### ERD:

![ERD](./erdStockAPI.png)

### ERD-2 (snake_case):

![ERD](./erdStockAPI2.png)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    src/
        config/
            dbConnection.js
            swagger.json
        controllers/
            auth.js
            brand.js
            category.js
            firm.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
        helpers/
            passwordEncrypt.js
            sendMail.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
            upload.js
        models/
            brand.js
            category.js
            firm.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
        routes/
            auth.js
            brand.js
            category.js
            document.js
            firm.js
            index.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
```
