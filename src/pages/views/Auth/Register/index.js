export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      const { name, email, password } = this;
      const { data } = await this.$store.dispatch('auth/register', {
        name,
        email,
        password,
      });

      if (!data) {
        return;
      }

      return this.$router.push({ name: 'videos' });
    }
  }
};