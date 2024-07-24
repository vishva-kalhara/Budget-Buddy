# API Documentation

## Base URL

`/api/v1/incomes`

## Endpoints

### 1. Get All Incomes

-   **Endpoint**: `/api/v1/incomes`
-   **Method**: `GET`
-   **Description**: Retrieves a list of all income records.
-   **Response**:
    -   **Status**: 200 (OK)
    -   **Body**:
        ```json
        {
          "status": "success",
          "count": number_of_records,
          "data": [
            {
              "id": "string",
              "title": "string",
              "description": "string",
              "amount": number
            },
            ...
          ]
        }
        ```

### 2. Get One Income

-   **Endpoint**: `/api/v1/incomes/:id`
-   **Method**: `GET`
-   **Description**: Retrieves a single income record by its ID.
-   **Parameters**:
    -   **Path**:
        -   `id` (string) - The ID of the income record.
-   **Response**:
    -   **Status**: 200 (OK) if record found
    -   **Body**:
        ```json
        {
          "status": "success",
          "data": {
            "id": "string",
            "title": "string",
            "description": "string",
            "amount": number
          }
        }
        ```
    -   **Status**: 404 (Not Found) if record not found
    -   **Body**:
        ```json
        {
            "status": "fail",
            "message": "There is no record associated!"
        }
        ```

### 3. Create Income

-   **Endpoint**: `/api/v1/incomes`
-   **Method**: `POST`
-   **Description**: Creates a new income record.
-   **Request Body**:
    ```json
    {
      "title": "string",
      "description": "string",
      "amount": number
    }
    ```
-   **Response**:
    -   **Status**: 201 (Created)
    -   **Body**:
        ```json
        {
          "status": "success",
          "data": {
            "id": "string",
            "title": "string",
            "description": "string",
            "amount": number
          }
        }
        ```
    -   **Status**: 400 (Bad Request) if missing required fields
    -   **Body**:
        ```json
        {
            "status": "fail",
            "message": "Please provide title, description and amount!"
        }
        ```

### 4. Update Income

-   **Endpoint**: `/api/v1/incomes/:id`
-   **Method**: `PATCH`
-   **Description**: Updates an existing income record by its ID.
-   **Parameters**:
    -   **Path**:
        -   `id` (string) - The ID of the income record.
-   **Request Body**:
    ```json
    {
      "title": "string",
      "description": "string",
      "amount": number
    }
    ```
-   **Response**:
    -   **Status**: 200 (OK) if record updated
    -   **Body**:
        ```json
        {
          "status": "success",
          "data": {
            "id": "string",
            "title": "string",
            "description": "string",
            "amount": number
          }
        }
        ```
    -   **Status**: 404 (Not Found) if record not found
    -   **Body**:
        ```json
        {
            "status": "fail",
            "message": "There is no record associated!"
        }
        ```

### 5. Delete Income

-   **Endpoint**: `/api/v1/incomes/:id`
-   **Method**: `DELETE`
-   **Description**: Deletes an income record by its ID.
-   **Parameters**:
    -   **Path**:
        -   `id` (string) - The ID of the income record.
-   **Response**:
    -   **Status**: 204 (No Content) if record deleted
    -   **Body**: No content
    -   **Status**: 404 (Not Found) if record not found
    -   **Body**:
        ```json
        {
            "status": "fail",
            "message": "There is no record associated!"
        }
        ```
