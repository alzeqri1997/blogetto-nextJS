import Tags from './Tags'
import { tags } from '../data'

                  <Typography
                    sx={{ display: 'flex' }}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {tags.map((tag, index) => (
                      <Tags key={index} tag={tag.tag} link={tag.link} />
                    ))}
                  </Typography>
