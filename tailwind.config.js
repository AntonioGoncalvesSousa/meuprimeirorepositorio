/** @type {import('tailwindcss').Config} */
export default {
  // Define os arquivos onde o Tailwind deve procurar por classes usadas
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Todos os arquivos dentro de src com essas extensões
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar animações e customizações
      keyframes: {
        // Define a animação chamada 'scroll'
        scroll: {
          '0%': { transform: 'translateX(-0%)' },   // Começa fora da tela pela direita
          '100%': { transform: 'translateX(-90%)' }, // Termina fora da tela pela esquerda
        },
      },
      animation: {
        // Nome da animação: 'scroll', que usa a keyframe acima
        // 20s = duração, linear = velocidade constante, infinite = repete pra sempre
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [
    // Plugins do Tailwind (vazio por enquanto)
  ],
}
