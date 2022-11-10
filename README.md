## Unit tests

- Focus is on testing the individual building blocks of an application such as class or a function or a component
- Each unit or building block is tested in isolation, independent of other units
- Dependencies are mocked
- Run in a short amount of time and make it very easy to pinpoint failures
- Relatively easier to write and maintain

## Integration tests

- Focus is on testing a combination of units and ensuring they work together
- Take longer than unit tests

## E2E tests

- Focus is on testing the entire application flow and ensuring it works as designed from strt to finish
- Involves in a real UI, a real backend database, real services etc
- Take the longest as they cover the most amount of code
- Have a cost implication as you interact with real APIs that may charge based on the number of requests

## Automated test

It is code that throws an error when the actual output does not match the expected output, it will pass when the output is correct and provide meaningful feedback when it is not

## TDD

Test driven development is a software development process where you wirte tests before writing the software code

Once the tests have been written, you then write the code to ensure the tests pass

- Create tests that verify the functionality of a specific feature
- Write software code that will run the tests successfully when re-executed
- Refactor the code for optimisation while ensuring the tests continue to pass

Also called red-green testing as all tests go from a red failed state to a green passed state

Section Summary

- Jest watch mode
- Filtering tests
- Grouping tests
- Filename conventions
- Code coverage
- Assertions

## What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

## What not to test?

- Implementation details
- Third party code
- Code that is not important from a user point of view

## RTL Queries

Every test we write generally involves the follwing basic steps

- Render the component
- Find an element rendered by the component
- Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL

For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom

Queries are the methods that Testing Library provides to find elements on the page

To find a single element on the page, we have

- getBy..
- queryBy..
- findBy..

To find multiple elements on the page, we have

- getAllBy..
- queryAllBy..
- findAllBy..

The above methods need to be combined with a suffix to form a actual query, the suffix can be

one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

## getByRole

getByRole queries for elements with the given role

Role refers to the ARIA (accessible rich internet applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them

By default, many semantic elements in HTML have a role

Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role and so on

If you are working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role

To use an anchor element as a button in the navbar, you can add role='button'

## getByRole Options

<u>name</u>

The accessible name is for simple cases equal to

- the label of a form element
- the text content of a button or
- the value of the aria-label attribute

## getByLabelText

getByLabelText will search for the label that matches the given text, then find the element associated with that label
