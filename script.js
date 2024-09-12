window.onload = function () {
    const gallery = document.querySelector(".gallery");
    const previewImage = document.querySelector(".perview-img img");

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = 55 + percentY * 2;
        const rotateY = percentX * 2;

        gsap.to(gallery, {
            duration: 1,
            ease: "power2.out",
            rotateX: rotateX,
            rotateY: rotateY,
            overwrite: "auto",
        });
    });

    // Use an array of direct image URLs
    const imageUrls = [
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1490365728022-deae76380607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1677410642801-725a73622e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1669218058060-fe92956306cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1535961652354-923cb08225a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1675368244448-b8cff9ffdb03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1532423622396-10a3f979251a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxuYXR1cmV8ZW58MHwwfDB8fHww",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1666792562670-f8a139c265ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1420745981456-b95fe23f5753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1710030733154-16b30a0f944f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1712685912275-943ff90aac7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
    ];

    // Dynamically create gallery items
    imageUrls.forEach((url, index) => {
        const item = document.createElement("div");
        item.className = "item";

        const img = document.createElement("img");
        img.src = url;
        item.appendChild(img);

        gallery.appendChild(item);
    });

    const items = document.querySelectorAll(".item");
    const numberOfItems = items.length;
    const angleIncrement = 360 / numberOfItems;

    items.forEach((item, index) => {
        gsap.set(item, {
            rotationY: 90,
            rotationZ: index * angleIncrement - 90,
            transformOrigin: "50% 400px",
        });

        // Add hover event to update preview image
        item.addEventListener("mouseover", function () {
            const imgInsideItem = item.querySelector("img");
            previewImage.src = imgInsideItem.src;

            gsap.to(item, {
                x: 0,
                y: 0,
                z: 0,
                ease: "power2.out",
                duration: 0.5,
            });
        });
    });

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        onRefresh: setupRotation,
        onUpdate: (self) => {
            const rotationProgress = self.progress * 360;
            items.forEach((item, index) => {
                const currentAngle = index * angleIncrement - 90 + rotationProgress;
                gsap.to(item, {
                    rotationZ: currentAngle,
                    duration: 1,
                    ease: "power3.out",
                    overwrite: "auto",
                });
            });
        },
    });
};

function setupRotation() {
    // Placeholder for any necessary setup logic
}
