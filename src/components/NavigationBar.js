export default function NavigationBar() {
  return `
    <nav class="bg-primary text-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <i class="fas fa-briefcase text-2xl"></i>
            <span class="text-xl font-bold">Algerian MicroJobs</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="/" class="hover:text-accent transition-colors">Home</a>
            <a href="#services" class="hover:text-accent transition-colors">Services</a>
            <a href="#how-it-works" class="hover:text-accent transition-colors">How It Works</a>
            <div class="relative">
              <button id="user-menu" class="flex items-center space-x-1">
                <i class="fas fa-user"></i>
                <span>Account</span>
                <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div id="dropdown-menu" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                <a href="/login" class="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Login</a>
                <a href="/register" class="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Register</a>
              </div>
            </div>
            <button id="dark-mode-toggle" class="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600">
              <i class="fas fa-moon dark:hidden"></i>
              <i class="fas fa-sun hidden dark:block"></i>
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-button" class="p-2">
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation (hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <a href="/" class="block py-2 hover:text-accent">Home</a>
          <a href="#services" class="block py-2 hover:text-accent">Services</a>
          <a href="#how-it-works" class="block py-2 hover:text-accent">How It Works</a>
          <div class="pt-2 border-t border-gray-700">
            <a href="/login" class="block py-2 hover:text-accent">Login</a>
            <a href="/register" class="block py-2 hover:text-accent">Register</a>
          </div>
        </div>
      </div>
    </nav>

    <script>
      // Dark mode toggle
      document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      });

      // Dropdown menu toggle
      const userMenu = document.getElementById('user-menu');
      const dropdownMenu = document.getElementById('dropdown-menu');
      userMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
      });

      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    </script>
  `;
}