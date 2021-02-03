const ErrorController = {
  index: (err, req, res, next) => {
    console.log(err)
    
    return res
      .status(500)
      .json({ error: 'Houve um erro. Por favor, tente novamente.' })
  }
}

export default ErrorController