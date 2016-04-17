## API Basejump: File Metadata Microservice

Written by: [Nicholas Asimov](https://www.freecodecamp.com/nicholasasimov)  
[FreeCodeCamp](https://www.freecodecamp.com) - [API Project: File Metadata Microservice](https://www.freecodecamp.com/challenges/file-metadata-microservice)

### User stories
1. I can submit a FormData object that includes a file upload.
2. When I submit something, I will receive the file size in bytes within the JSON response.

*Files are stored into memory and removed by the garbage collector after you get a response.*

### Example usage
```
Upload the file via form on root page or send a POST request
to /upload with Content-Type: multipart/form-data and name="file"
```

### Example output
```
{
  "name": "README.md",
  "encoding": "7bit",
  "mimetype": "text/markdown",
  "size": 568
}
```

### [Live Website](https://file-info.herokuapp.com)
