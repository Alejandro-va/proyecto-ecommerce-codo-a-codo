export const RecoverPassword = () => {
  const handleRecoverPassword = (e) => {
    e.preventDefault();
    e.currentTarget["email"]
  }

  return (
    <form onSubmit={handleRecoverPassword}>
      <input type="text" name="email" placeholder="user@email.com" />
    </form>
  )
}

export default RecoverPassword;