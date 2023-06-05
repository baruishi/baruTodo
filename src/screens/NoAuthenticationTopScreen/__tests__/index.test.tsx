import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'

import { NoAuthenticationTopView } from '../view'

const mockOnAuthenticate = jest.fn()

describe('NoAuthenticationTopView tests', () => {
  it('There is "Authentication required" rendered', () => {
    const { getByText } = render(
      <NoAuthenticationTopView onAuthenticate={mockOnAuthenticate} />
    )

    const textText1 = getByText(new RegExp('Authentication required', 'i'))
    expect(textText1).toBeDefined()
  })
  it('mockOnAuthenticate function is called when user clicks "Authenticate" button', async () => {
    const { getByText } = render(
      <NoAuthenticationTopView onAuthenticate={mockOnAuthenticate} />
    )
    await waitFor(() =>
      fireEvent.press(getByText(new RegExp('Authenticate', 'i')))
    )
    expect(mockOnAuthenticate).toHaveBeenCalled()
  })
})
