const homeController = {}
// Se cea un objeto en el cual usaremos la notacion de punto para asignarle funciones

homeController.getHome = (req, res) => {
    res.send('Hello world!')
}

homeController.getAbout = (req, res) => {
    res.send('About!')
}

export default homeController