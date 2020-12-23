export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: true,
    };
  },
  methods: {
    async onSubmit() {
      const { email, password, rememberMe } = this;
      const { data } = await this.$store.dispatch('auth/login', {
        email,
        password,
        rememberMe,
      });

      if (!data) {
        return;
      }

      return this.$router.push({ name: 'videos' });
    }
  }
};