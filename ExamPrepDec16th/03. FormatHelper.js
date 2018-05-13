function helper(arr){
    let text = arr[0];

    text = text.replace(/([.,!?:;])\s*/g, (match => match.trim() + ' '));
    text = text.replace(/\s+[.,!?:;]/g, (match => match.trim()));
    text = text.replace(/\.\s*\.\s*\.\s*!/g, '...!');
    text = text.replace(/\.\s+(\d+)/g, (match, gr1) => '.' + gr1.trim());
    text = text.replace(/"([^"]+)"/g, ((match, gr1) => `"${gr1.trim()}"`));

    console.log(text);
}
helper(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);