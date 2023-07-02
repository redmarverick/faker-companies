    import countriesImgPath from '../components/countriesImgPath';
    // Tests that the 'countriesImgPath' array is correctly populated with country names and image paths
    it('test_countries_img_path_population', () => {
        countriesImgPath.forEach(country => {
            expect(country).toHaveProperty('Country');
            expect(country).toHaveProperty('imgPath');
        });
    });