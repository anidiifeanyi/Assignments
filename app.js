// varibles
let sliderImg = document.querySelector('.slider-img')
let images = []
let i = 0 

//Image List
images[0] = "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

images[1] =  "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

images[2] =  "https://images.unsplash.com/photo-1619090125361-879aba634f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"

images[3] =  "https://images.unsplash.com/photo-1495317823589-e67efe1524b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

images[4] =  "https://images.unsplash.com/photo-1573466359556-977b406e0008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

images[5] =  "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"

// left button
function prev(){
  if(i <= 0) i = images.length
  i--
  return setImg()
}

// Right button
function next(){
  if(i >= images.length - 1) i = -1
  i++
  return setImg()
}

// Image slider
function setImg(){
  return sliderImg.src = images[i]
}