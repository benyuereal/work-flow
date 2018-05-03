var one_util = {
  handleJSON: function (response) {
    var result = eval('(' + response.bodyText + ')')
    return result
  }
}
export default one_util
