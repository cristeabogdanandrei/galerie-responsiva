*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}
.container {
    width: 100%
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 8%;
}
.gallery{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      grid-gap: 30px;
}
.gallery img{
     width: 100%;
     
