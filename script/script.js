 // Smooth scroll
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.scrollBehavior = 'smooth';
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll to top on logo click
        document.querySelector('.logo').addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Add page transition on SWOT card clicks
        document.querySelectorAll('.swot-card, .nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                const transition = document.createElement('div');
                transition.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #FF6400;
                    z-index: 9999;
                    transform: translateY(-100%);
                    animation: slideDown 0.6s ease-out forwards;
                `;
                
                const keyframes = `
                    @keyframes slideDown {
                        0% { transform: translateY(-100%); }
                        50% { transform: translateY(0); }
                        100% { transform: translateY(100%); }
                    }
                `;
                
                const style = document.createElement('style');
                style.textContent = keyframes;
                document.head.appendChild(style);
                
                document.body.appendChild(transition);
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });