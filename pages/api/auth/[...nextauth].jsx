import NextAuth from "next-auth"
import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials";
import { postAPI } from "@/services/fetchAPI";
import EncryptPassword from "@/functions/other/cryptology/encryptPassword";


let loginPageRoute = "partner";

const authOptions = {

  providers: [
    // CredentialsProvider ile email ve şifreyi kullanıcıdan alarak normal giriş yapmasını sağlarız.
    // farklı giriş yöntemleri ile (google - github - facebook) giriş için hazır "provider" ları kullanabiliriz.
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "role", type: "text" },
      },

      async authorize(credentials) {

        

        
        let { email, password, role } = credentials;     
        
        const data = await postAPI(`/auth/login`, { role, email, password });
        
        if (!data || data.error || data == null) {
            throw new Error(data.error || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
        }

        // Kullanıcı bilgilerini döndürüyoruz.
        console.log("#### [...nextauth] ####");
        console.log(data);
        const user = data;
        return user;



      }
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,

  },

  // kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini token değişkenine atıyoruz.
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60 // 1 days * 24 hours * 60 minutes * 60 seconds
  },

  callbacks: {
    // jwt fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini token değişkenine atıyoruz.
    // bu bilgileri session fonksiyonunda kullanacağız.
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // session fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini session değişkenine atıyoruz.
    async session({ session, token }) {

      session.user = token;
      return session;
    },
  },

  pages: {
    // signIn fonksiyonu çalıştığında kulanıcıyı yönlendireceğimiz sayfayı belirtiyoruz.
    signIn: `/`,
    // signIn: `/auth/login/${loginPageRoute}`,
    encryption: true,
  },
}

export default NextAuth(authOptions)

