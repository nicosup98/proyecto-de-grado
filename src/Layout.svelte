<div class="min-h-screen flex flex-col">
    <div class="ocean">
        <div class="bubble bubble--1"></div>
        <div class="bubble bubble--2"></div>
        <div class="bubble bubble--3"></div>
        <div class="bubble bubble--4"></div>
        <div class="bubble bubble--5"></div>
        <div class="bubble bubble--6"></div>
        <div class="bubble bubble--7"></div>
        <div class="bubble bubble--8"></div>
        <div class="bubble bubble--9"></div>
        <div class="bubble bubble--10"></div>
        <div class="bubble bubble--11"></div>
        <div class="bubble bubble--12"></div>
    </div>
    
    <nav class="sticky top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-20 overflow-hidden">
        <div class="flex items-center">
            <a href="https://www.urbe.edu" target="_blank">
                <img src="/urbe_logo.webp" class="w-44 zoom-img mr-2" alt="URBE Logo" loading="lazy" width="176" height="auto" />
            </a>
        </div>
        <div class="flex items-center">
            <a href="https://urbesustentable.urbe.edu/" target="_blank">
                <img src="/sustentable_logo.webp" class="w-16 zoom-img ml-2" alt="Huella logo" loading="lazy" width="64" height="auto" />
            </a>
        </div>
    </nav>
    
    <div class="flex-grow">
        <slot/>
    </div>
    
    <footer class="bg-gray-800 text-white p-4 text-center w-full">
        <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
        <p>©2024 Powered by Servieduca All rights reserved</p>
    </footer>
</div>