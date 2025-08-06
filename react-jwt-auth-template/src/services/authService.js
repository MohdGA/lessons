const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try{
    console.log(formData);
    const res = await fetch(`${BASE_URL}/sign-up`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    
    if(data.token){
      localStorage.setItem('token', data.token);
      const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
      return decodedToken;
    }
  } catch(error){
    console.log(error);
  }
};

const signIn = async(formData) => {
  try{
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if(data.token){
      localStorage.setItem('token', data.token);

      const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
      return decodedToken;
    }
  } catch(error){
    console.log(error.message);
  }
};

const getUser = () => {
 const token = localStorage.getItem('token');

 if(token){
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  return decodedToken;
 }else{
  return null;
 }
}



export {
  signUp,
  signIn,
  getUser,
}