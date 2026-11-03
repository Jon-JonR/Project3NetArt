        // List of all Videos
        const links = [
            "https://www.youtube.com/watch?v=gFQEnxUbJaU&list=LL&index=8&pp=iAQBsAgC",
            "https://www.youtube.com/watch?v=Rbr9G7TWGD0&list=LL&index=23&pp=iAQBsAgC",
            "https://www.youtube.com/watch?v=5evxckgr4bY&list=LL&index=28&pp=iAQBsAgC",
            "https://www.youtube.com/watch?v=DP3rDP02lE0&list=LL&index=158&pp=iAQBsAgC",
            "https://www.youtube.com/watch?v=G_oC7anVuA8&list=LL&index=160&pp=iAQB0gcJCSoMAYcqIYzvsAgC",
            "https://www.youtube.com/watch?v=PjsWkGvypSQ&list=LL&index=183",
            "https://www.youtube.com/watch?v=0qi7eSP8c5Y&list=LL&index=195&pp=iAQBsAgC",
            "https://www.youtube.com/watch?v=QT-Ygbx_65E&t=2240s&pp=ygULdHJhc2ggdGFzdGU%3D",
            "https://www.youtube.com/watch?v=dlSbEP4V-gI&list=RDdlSbEP4V-gI&start_radio=1",
           "https://www.youtube.com/watch?v=V8rlZ1tbJbM&list=LL&index=224",
           "https://www.youtube.com/watch?v=PBQIhjaFVlg&list=LL&index=231",
           "https://www.youtube.com/watch?v=IL34u4_LGuI&list=LL&index=248",
           "https://www.youtube.com/watch?v=FOqKN-ouAUE&list=RDFOqKN-ouAUE&start_radio=1&pp=ygUJb25lIGRhbmNloAcB",
           "https://www.youtube.com/watch?v=WgSM0RBJdMk&list=LL&index=316&pp=iAQBsAgC",
           "https://www.youtube.com/watch?v=SK9RHGBfVX4&list=LL&index=329&pp=iAQBsAgC",
           "https://www.youtube.com/watch?v=t-q7ZvJgFww&list=LL&index=378&pp=iAQBsAgC",
           "https://www.youtube.com/watch?v=y7Qfp2aVhEM&list=LL&index=406&pp=iAQB0gcJCSoMAYcqIYzvsAgC",
           "https://www.youtube.com/watch?v=YBGAhPa740Y&list=LL&index=448",
           "https://www.youtube.com/watch?v=zMQ2z2qheAk&list=LL&index=478",
           "https://www.youtube.com/watch?v=EFkxk-0PZjw",
           "https://www.youtube.com/watch?v=ptQ6Re6JvWM&list=LL&index=518",
           "https://www.youtube.com/watch?v=niXpfUwdJ4U&list=LL&index=641",
           "https://www.youtube.com/watch?v=gXr1O8e9-mM&list=LL&index=784"
        ];

        function goToRandomLink() {
            if (!checkbox.checked) return;

            const randomIndex = Math.floor(Math.random() * links.length);
            
            const randomLink = links[randomIndex];
            
            window.location.href = randomLink;
        }


        const checkbox = document.getElementById('agree-checkbox');
        const button = document.getElementById('submit-btn');

        button.classList.add('disabled');
        button.setAttribute('aria-disabled', 'true');

        checkbox.addEventListener('change', function() {
            const isDisabled = !this.checked;

            button.classList.toggle('disabled', isDisabled);
            button.setAttribute('aria-disabled', isDisabled);
        });
        
