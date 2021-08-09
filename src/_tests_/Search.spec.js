import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

describe('<Search />', () => {
    let getByTestId;

    describe('clicking the search button', () => {

        beforeEach( async () => {
            ({ getByTestId } = render(<Search />));

            await userEvent.type(getByTestId('searchTerms'), 'New search',);
            await userEvent.type(getByTestId('locationText'), 'New location',);
            userEvent.click(getByTestId('searchButton'));
        });

        it('clears the search field', () => {
            expect(getByTestId('searchTerms').value).toEqual('');
        });

        it('clears the location field', () => {
            expect(getByTestId('locationText').value).toEqual('');
        });
    })
})