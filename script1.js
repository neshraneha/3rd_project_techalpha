document.getElementById('generate').addEventListener('click', function() {
    const passwordLength = 10; 
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('password').value = password;
});

gsap.to("#generate", {
    scale: 1.1,
    duration: 0.2,
    yoyo: true,
    repeat: 1
});