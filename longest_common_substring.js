class LCS {

    get(str1, str2) {
        const str1Length = str1.length - 1;
        const str2Length = str2.length - 1;

        if (str1Length <= 0 || str2Length <= 0) {
            return 0;
        }

        if (str1[str1Length] === str2[str2Length]) {
            return 1 + this.get(str1.substring(0, str1Length), str2.substring(0, str2Length));
        }

        return Math.max(this.get(str1.substring(0, str1Length), str2),
            this.get(str1, str2.substring(0, str2Length)));
    }
}

const lcs = new LCS();
const result = lcs.get('cdabcdk', 'kfabcdop');

console.log(result);