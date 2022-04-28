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
Since the form is required to save the new confession to the list in state, I need to move the list up to the level where they it can be passed to both the confessions and misdemeanours pages.  App seems too high but MainLayout is the lowest level I can achieve it even though it seems an odd place to put the code.

## Error Boundary
Decided to install https://github.com/bvaughn/react-error-boundary to handle errors as nothing doing that at the moment.

## Helper methods
I have noticed that there are some methods that need to be reused to create new misdemeanour records in the form so have extracted those out into their own modules for reuse.

## The requirement to add subject and extra details in the confession form 
It is unclear what to do with the extra two field contents and, if I had a client, I would ask them if they want the new fields added to the MisdemeanourRecord, leaving the fields for the existing records blank.  There doesn't seem to be a requirement to display that detail in the Misdemeanours page either.  In the short term, I will add these fields to the MisdemeanourRecord as optional fields but not display them. Later we're asked to output them to the console so doing that.

## Adding the option to just talk
That wasn't fun but I assume the requirement was added to deliberately break the code to push the learning that bit further.  I'm not completely happy with it as it feels rather hacky.  There's probably a better way but I have limited time.  If I can think of a better way between now and tomorrow morning, I will attempt to refactor it.

## CSS
Added some styling but running out of time so going to leave it for now.  If I have the time to return to it, I will attempt to enhance the styling, tidy the css and add media queries for different screen sizes.

## Disabling the button
On investigating the button disabling requirement, I noticed that it is not good for accessiblity to disable it through the DOM (because it does not allow focus to find out why it is disabled) so I opted to show a message if the select option was still set to the default instead and if a new state called 'showValidation' was true.  It effectively blocks the button action without blocking the button.

## Next

[] Reset the form after submission (set the state to be blank I assume...) 
[] Validate the HTML for accessbility
