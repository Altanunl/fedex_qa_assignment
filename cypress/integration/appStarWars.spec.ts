import {charactersPage} from '../pages/pageCharacters';
import {planetsPage} from '../pages/pagePlanets';

describe("Star Wars Search web application", () => {
    beforeEach(() => {
      cy.visit('/');
    })

    //Search for characters is using the 'enter' key to search
    it('Should search for a Character', () => {

        new charactersPage()
            .verifyAppCharacters()
            .search('Luke')
            .name('Luke Skywalker')
            .gender('male')
            .birthYear('19BBY')
            .eyeColor('blue')
            .skinColor('fair')
    });

    it('Should not find a Character', () => {

      new charactersPage()
          .verifyAppCharacters()
          .search('ABC')
          .noResult()
  });
    //Search for planets is clicking on 'button' for search
    it('Should search for a Planet', () => {

      new planetsPage()
          .verifyAppPlanets()
          .search('Alderaan')
          .population('2000000000')
          .climate('temperate')
          .gravity('1 standard')
  });

  it('Should not find a Planet', () => {

    new planetsPage()
        .verifyAppPlanets()
        .search('ABC')
        .noResult()
  });

  //Counting and veryfing all results on screen
  it('Should verify more than 1 planet on screen', () => {

    new planetsPage()
        .verifyAppPlanets()
        .search('a')
        .verifyPlanetsOnPage(10)
});

  //Cross searching planets and characters, then clearing search with multiple hits
  it('Should only have search results for charachters and then clear all results', () => {

    new charactersPage()
    .verifyAppCharacters()
    .search('Alderaan')
    .noResult()
    .search('da')
    .clearSearchPage()
});

})