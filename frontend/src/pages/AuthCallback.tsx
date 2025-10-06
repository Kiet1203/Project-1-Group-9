export default function AuthCallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
            <p className="text-lg mb-2">
              Xin chào, <b>user</b> 👋
            </p>
              <img
                src=""
                alt="avatar"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            <p>Email : test@gmail.com</p>
            <p>Id: testID</p>    
            <p className="text-sm text-gray-400">Đăng nhập thành công!</p>
        </div>
    </div>
  );
}
