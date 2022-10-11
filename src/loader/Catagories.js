export const Catagories = async () => {
    const catagoriesData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await catagoriesData.json();
    return data;
}