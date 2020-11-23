const DAY = 24*60*60

function setClient(cname, cvalue, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*DAY));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setServer(res) {  
  return (cname, cvalue, days) => {
    const cData = `${cname}=${cvalue}; Path=/; Max-Age=${days*DAY}`

    res.setHeader('Set-Cookie', [cData]);
  }
}

function getServer(req, res){
  return (cname) => {
    if(!req.headers.cookie) return

    const cookie = req.headers.cookie
    
    const cookies = cookie.split('; ')

    for(let i = 0; i < cookies.length; i++){
      const c = cookies[i].split('=')

      if(c[0] === cname) return decodeURIComponent(c[1])
    }
  }
}

function getClient(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export default (context, inject) => {
  const cookie = {
    set: !context.res ? setClient : setServer(context.res),
    get: !context.req ? getClient : getServer(context.req),
    del: (cname) => {
      if(!context.req){
        return setClient(cname, '', -1)
      }else{
        return setServer(context.res)(cname, '', -1)
      }
    }
  }

  inject('cookie', cookie)
  context.$cookie = cookie
}