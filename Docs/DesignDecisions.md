# Design Decisions:

I started this part way through but thought it necessary because of a couple of particularly tricky issues.

## generateMisdemeanours 'API'
On bringing in the generateMisdemeanours 'API', I noticed that it was set up to return an array of Misdemeanour types but it actually returned an array of objects that included the Misdemeanour type within it.  I therefore created an interface that included all the fields returned and set that as the return type.

## Misdemeanour Text Question:
It became clear that the initial 'database' returning misdemeanours includes a type based on  an array of single words and the state in Misdemeanour holds MisdemeanourRecords which are contrained by that type.  The UI, however, is required to hold a more comprehensive string with an emoji.  If I alter the MisdemeanourRow component to use a switch to display this longer string, it doesn't display the new string and the state will know nothing about it anyway. 

On the assumption that the fake API data cannot be changed (under normal circumstances this would not be possible), I can't change it at source.
The main option open to me is to extend the MisdemeanourRecord to include the longer string as another optional field in the object and update the type of useState in Misdemeanour.tsx to be this. I can then add that string as a field to the MisdemeanourRecord at the same time I get the data from the API in the loading useEffect hook.

## Filtering misdemeanours:
I had misunderstood the initial filtering request to mean the number of misdemeanours rather than filtering by type of misdemeanour so having to backfill here.
After a long struggle, I eventually realised that I needed to create a component for the Select in order to control the change.  Then I needed to filter the misdemeanour records by the option when it changed in the select component via another useEffect hook, then make sure I could unfilter it too.  The filtering useEffect hook needed to change both when the option changed and when the initial set of misdemeanours were loaded.

## Styling:
I found a colour scheme the client likes... 😜 It'll do owing to time limitations.  Will return to look and feel when I have more time.

## Testing:
Well... what can I say, the assignment for this project is due well before the ones that are intended to fix our understanding of testing React... so... um... yeah.  It might have been better the other way around so the harder assignments were due after the easier (fix that knowledge) type.

## Refactor misdemeanours to the home app level:
Since the form is required to save the new confession to the list in state, I need to move the list up to the top level so that it can be passed to both the confessions and misdemeanours pages.

## Error Boundary
Decided to install https://github.com/bvaughn/react-error-boundary to handle errors.