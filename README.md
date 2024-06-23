# SlidelyFormApp - Backend

# to run locally 

## 1. you need visual studio code and download express and typescript in your visual studio code 

    you can run the following command
   ```
   npm install -g ts-node
   npm install express
   npm install typescript ts-node @types/node @types/express --save-dev
   ```


## 2. Now open your project and create src file and in src file create db.json and server.ts 

     now hit this command to start the project 
     ```
     npm run start
     ```

## 3. so we have 6 apis in our server.ts file 
### 1. ping api ->  it is a get request and will return always true its only for chceking the server

we can see what this api will return by hitting it on postman
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/7ede3ca3-73ce-4865-983a-041af07f4fcf)

### 2. read api -> it is a get request and it will return the data from the given index 

we can see what this api returning json data from index 1
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/ccc38eb9-15cb-40d5-8001-6fed877c688d)


### 3. submit api -> it is a post request so we have to send data from frontend

as you can see we got a success means data is added in our backend 
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/99ee7c31-9831-4d45-9370-3d13424ee0de)

### 4. submmissions -> it is a get request and it will return all data present in backend in json format 

we can see in postman it returned all data available in backend
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/3a9a371f-9ce5-4bc4-a58b-07a8205c083f)


### 5. DELETE api -> it will delete the data at given index 

we hit this api from postman and it deleted the data at given index
we can see a true message that data present at index 1 is deleted now 
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/79850b8b-7fda-4093-a54e-371a4185291f)

### 5. edit api -> it is a put request and it will update the data at given index

we can see in the image that data present at index 1 is updated now 
![image](https://github.com/swamivikas/slidely-form-APP---Backend-Repo/assets/108607735/e4df97c4-dfc1-4499-94ff-e753a28b4e19)
