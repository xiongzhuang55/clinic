aboutData => {
  this.$http.get('/api/about').then((res) => {
    console.log(res.body.data)
  })
}
